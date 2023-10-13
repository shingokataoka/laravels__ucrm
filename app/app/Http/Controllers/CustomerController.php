<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\Customer;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $urlParameters = array_filter( request()->query() );
        $search = request()->search;

        $customers = Customer::searchCustomers($search)->paginate(7);
        return Inertia::render('Customers/Index', compact('customers', 'urlParameters'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Customers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomerRequest $request)
    {
        Customer::create([
            'name' => $request->name,
            'kana' => $request->kana,
            'tel' => $request->tel,
            'email' => $request->email,
            'postcode' => $request->postcode,
            'address' => $request->address,
            'birthday' => $request->birthday,
            'gender' => $request->gender,
            'memo' => $request->memo,
        ]);
        session()->flash('status', 'success');
        session()->flash('message', '顧客を登録しました。');
        return to_route('customers.index', [
            'page' => Customer::paginate(7)->lastPage(),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        dd('CustomerControllerの' . __FUNCTION__);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        dd('CustomerControllerの' . __FUNCTION__);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        dd('CustomerControllerの' . __FUNCTION__);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StoreCustomerRequest $request, Customer $customer)
    {
        dd('CustomerControllerの' . __FUNCTION__);
    }
}
