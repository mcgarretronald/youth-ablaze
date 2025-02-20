import React from 'react';
import QAComponent from './Quiz';

export default function FreqQuiz() {
    return (
        <div className=" mx-[8%] py-10">
            <h1 className="text-2xl md:text-4xl font-semibold mb-6">Frequently Asked Questions</h1>

            <div className="grid md:grid-cols-2 gap-5">
                <QAComponent
                    question="How can I get involved with Youth Ablaze?"
                    answer="Visit our 'Get Involved' page to find out more about volunteering, donations, and partnership opportunities."
                />

                <QAComponent
                    question="What programs do you offer?"
                    answer="We offer a range of programs focused on leadership development, community engagement, and youth empowerment."
                />

                <QAComponent
                    question="How can I support your mission?"
                    answer="Support us by donating, volunteering, or spreading the word about our initiatives. Every bit helps!"
                />

                <QAComponent
                    question="Who can participate in your programs?"
                    answer="Our programs are open to all young people eager to make a difference and hone their leadership skills."
                />

                <QAComponent
                    question="Do you offer online resources?"
                    answer="Yes, we provide a variety of online resources to support youth development and leadership training."
                />
            </div>
        </div>
    );
}
