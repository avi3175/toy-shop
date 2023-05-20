import React from 'react';

const PageNotFound = () => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="max-w-md mx-auto">
                    <img src="https://cdn.dribbble.com/users/1281023/screenshots/5984585/404_animation_render.gif" alt="404 Not Found" className="w-full" />
                    <h1 className="text-4xl text-gray-800 font-bold mt-8 animate-bounce">Oops! Page Not Found</h1>
                
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;