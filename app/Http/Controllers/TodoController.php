<?php

namespace App\Http\Controllers;


class TodoController extends Controller
{
    public function index()
    {
        $data = [
            'name' => 'Wahyu Rifki Taufik'
        ];
        return inertia('Todo', $data);
    }
}
