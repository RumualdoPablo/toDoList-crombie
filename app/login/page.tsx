import SignIn from '@/components/auth/SignIn';
import React from 'react';

export default function Login() {

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center">
            <header className="bg-blue-600 dark:bg-blue-800 w-full py-6">
                <h1 className="text-white text-3xl text-center font-bold">Login</h1>
            </header>
            <main className="flex-grow flex flex-col justify-center items-center px-4">
                <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Sign In</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Please sign in using your GitHub account to continue.
                    </p>
                    <div className=''>
                        <SignIn />
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 dark:bg-gray-900 w-full py-4">
                <p className="text-center text-white">© 2023 To-Do List. All rights reserved.</p>
            </footer>
        </div>
    );
}