<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        sleep(2);
        return [
            'name' => ['required','string', 'min:2', 'max:50'],
            'kana' => ['required','string', 'min:2', 'max:50', 'regex:/\A[ァ-ヴー]+\z/u', ],
            'tel' => ['required','numeric', 'digits_between:5,20', 'unique:customers,tel'],
            'email' => ['required','email', 'max:255', 'unique:customers,email'],
            'postcode' => ['required','numeric', 'max_digits:7'],
            'address' => ['required','string', 'max:100'],
            'birthday' => ['required','date'],
            'gender' => ['required','numeric', 'between:0,3'],
            'memo' => ['required','string', 'between:2,50'],
        ];
    }

    public function messages() :array
    {
        return [
            'kana.regex' => ':attributeは全角カタカナで入力してください。',
            'gender' => ':attributeは正しく選択してください。',
        ];
    }
}
