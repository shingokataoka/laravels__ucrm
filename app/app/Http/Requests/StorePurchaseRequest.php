<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePurchaseRequest extends FormRequest
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
            'customer_id' => ['required','integer'],
            'status' => ['required','boolean'],
            'date' => ['required', 'date_format:Y-m-d'],
            'items' => ['required', 'array'],
            'items.*.id' => ['required', 'integer', Rule::exists('items')->where(function ($query) {
                return $query->where('is_selling', '=', true);
            }),],
            'items.*.quantity' => ['required', 'integer', 'between:1,9'],
        ];
    }

    public function messages(): array
    {
        return [
            'customer_id' => '顧客を選択してください。',
            'status' => '購入かキャンセルかが指定されていません。',
            'items' => '購入商品が指定されていません。',
            'items.*.id.integer' => '購入商品の識別IDが自然数になっていません。',
            'items.*.id.exists' => '購入商品の識別IDが存在しない識別IDです。',
            'items.*.quantity' => '商品の購入数は1〜9個に指定してください。',
        ];
    }
}
