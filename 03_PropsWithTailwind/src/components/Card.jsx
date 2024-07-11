// Type rfce for boiler-plate generation of react. rfce --> Create React Functional Component and export

import React from 'react'

// Instead of using props in function parameter as it is object, we can directly destructure it
function Card({ userName: name, src, designation: des, location: loc }) {
    console.log("Username : ", name);
    console.log("Designation : ", des);
    console.log("Location : ", loc);

    return (
        <>
            <div className="m-6">
                <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                    <img className="w-24 h-24 rounded-full mx-auto" src={src} alt="" width="384" height="512" />
                    <div className="pt-6 space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div>
                                {name}
                            </div>
                            <div>
                                {des} {loc}
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
            {/* <div className="m-6">
                <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                    <img className="w-24 h-24 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/11613311?v=4" alt="" width="384" height="512" />
                    <div className="pt-6 space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div>
                                Hitesh Choudhary
                            </div>
                            <div>
                                Software Engineer, India
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div> */}
        </>
    );
}

export default Card