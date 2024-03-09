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

        ];
        return inertia('Todo', $data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'task' => 'required',
            'status' => 'required',
        ], [
            'task.required' => 'task wajib diisi',
            'status.required' => 'status Wajib diisi',
        ]);

        Todo::create($data);

        return back()->with('success', 'Data berhasil ditambahkan');
    }
}
