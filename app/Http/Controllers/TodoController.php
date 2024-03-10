<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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
}
