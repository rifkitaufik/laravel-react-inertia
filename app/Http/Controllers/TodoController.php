<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Log;

class TodoController extends Controller
{
    public function index()
    {
        $data = [
            'todos' => Todo::latest()->paginate(4),
        ];
        return inertia('Todo', $data);
    }

    public function store(Request $request)
    {
        Log::info($request->date);
        $data = $request->validate([
            'task' => 'required',
            'status' => 'required',
            'date' => 'required',
        ], [
            'task.required' => 'task wajib diisi',
            'status.required' => 'status Wajib diisi',
            'date.required' => 'date wajib diisi',
        ]);

        Todo::create($data);

        return back()->with('success', 'Data Task berhasil ditambah');
    }

    public function update(Request $request, Todo $todo)
    {
        Log::info($request->date);
        $request->validate([
            'task' => 'required|string',
            'status' => 'required|string',
            'date' => 'required|date',
        ]);

        $todo->update([
            'task' => $request->task,
            'status' => $request->status,
            'date' => $request->date,
        ]);

        return redirect()->route('todo.index')->with('success', 'Data berhasil diperbarui');
    }

    public function destroy(Todo $todo)
    {
        $todo->delete();
        return redirect()->route('todo.index')->with('success', 'Data berhasil dihapus');

//        return response()->json(['message' => 'Data berhasil dihapus']);
    }
}
