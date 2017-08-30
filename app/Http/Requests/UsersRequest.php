<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstname' => 'required|max:255',
            'lastname' => 'required|max:255',
            'username' => 'required|unique:users|max:255',
        ];
    }

    public function messages()
    {
        return [
            'firstname.required' => 'Le champ Prénom est obligatoire',
            'firstname.max' => 'Le champ Prénom ne doit pas dépasser 255 caractères',
            'lastname.required' => 'Le champ Nom est obligatoire',
            'lastname.max' => 'Le champ Nom est ne doit pas dépasser 255 caractères',
            'username.required' => 'Le champ Pseudo est obligatoire',
            'username.unique' => 'Le Pseudo est déjà utilisé',
            'username.max' => 'Le champ Pseudo est ne doit pas dépasser 255 caractères',
        ];
    }
}
