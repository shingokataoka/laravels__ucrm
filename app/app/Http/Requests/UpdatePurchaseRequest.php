<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePurchaseRequest extends FormRequest
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
        return [
            'status' => ['required', 'boolean'],
            'items' => ['required', 'array'],
            'items.*.id' => ['required', 'exists:items,id'],
            'items.*.quantity' => ['required', 'integer', 'between:0,9'],
        ];
    }

    public function messages(): array
    {
        return [
            'status' => 'ステータスが正しく選択されていません。',
            'items.required' => '商品が一つも購入されていません。',
            'items.array' => '商品が一つも購入されていません。',
            'items.*.id' => '商品が正しく選択されていません。',
            'items.*.quantity' => '商品の数量は0〜9個にしてください。',
        ];
    }
}
