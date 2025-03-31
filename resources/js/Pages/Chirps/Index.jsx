import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
 
export default function Index({ auth }) {

    // data stores the data, currently just message
    // post = POST request to the backend
    // processing = boolean indicating if form is being submitted
    // reset = reset form after successful submission
    // errors = contains any validation errors from the backend
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        // route() is an Inertia helper that generates the URL route from the backend
        post(route('chirps.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout>
            <Head title="Chirps" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        // setData is a fn provided by Inertia's useForm
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Chirp</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}