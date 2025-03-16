import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("❌");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value;
        setAnswer(newAnswer);
        if (newAnswer.trim() === expectedAnswer) {
            setFeedback("✔️");
        } else {
            setFeedback("❌");
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer: {feedback}</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
        </div>
    );
}
