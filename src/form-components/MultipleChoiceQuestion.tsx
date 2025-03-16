import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: {
    expectedAnswer: string;
    options: string[];
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);

    function updateSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    const isCorrect = selected === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceSelect">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select value={selected} onChange={updateSelection}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div className="mt-2">{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
