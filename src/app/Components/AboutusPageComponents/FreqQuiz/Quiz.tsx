import React from 'react';

interface QAProps {
    question: string;
    answer: string;
}

const QAComponent: React.FC<QAProps> = ({ question, answer }) => {
    return (
        <div className="my-4">
            <h2 className="text-lg md:text-xl  font-normal">{question}</h2>
            <p className="text-gray-500 mt-2 text-sm">{answer}</p>
        </div>
    );
};

export default QAComponent;
