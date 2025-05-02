import { ShipWheelIcon } from "lucide-react";

const DeveloperPage = () => {
    const developers = [
        {
            name: "Mahesh Jadhao",
            email: "maheshjadhao172@gmail.com",
            role: "Full Stack Developer",
            github: "https://github.com/MAHESH94944/",
            linkedin: "https://www.linkedin.com/in/mahesh-jadhao-521959279/",
            image: "/MaheshJadhao_23.jpg",
        },
        {
            name: "Rohan More",
            email: "rohanmore0501@gmail.com",
            role: "AIML",
            github: "https://github.com/rename2222",
            linkedin: "http://linkedin.com/in/rohan-more-0a8177278",
            image: "/RohanMore_37.jpg",
        },
        {
            name: "Hemant Nandane",
            email: "hemantgnandane@gmail.com",
            role: "Frontend Developer",
            github: "https://github.com/hemantgnandane",
            linkedin: "https://www.linkedin.com/in/hemant-nandane-8a7034262",
            image: "/HemantNandane_38.jpg",
        },
        {
            name: "Tanmay Mali",
            email: "tanmaymali542004@gmail.com",
            role: "Software Developer",
            github: "https://github.com/TanmayMali5404",
            linkedin: "https://www.linkedin.com/in/tanmay-mali/",
            image: "/TanmayMali_66.jpg",
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="border border-primary/25 flex flex-col w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <ShipWheelIcon className="size-9 text-primary" />
                        <h1 className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Developer Information
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {developers.map((dev, index) => (
                            <div
                                key={index}
                                className="border border-base-300 rounded-lg p-4 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={dev.image} alt={dev.name} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">{dev.name}</p>
                                    <p className="text-sm text-base-content/70">{dev.role}</p>
                                    <p className="text-sm">{dev.email}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm">
                                        <strong>GitHub:</strong>{" "}
                                        <a
                                            href={dev.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            {dev.github}
                                        </a>
                                    </p>
                                    <p className="text-sm">
                                        <strong>LinkedIn:</strong>{" "}
                                        <a
                                            href={dev.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            {dev.linkedin}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperPage;
