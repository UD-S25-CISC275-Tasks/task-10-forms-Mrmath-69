import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");

    function subAttempts() {
        setAttempts(attempts - 1);
    }
    function addAttempts() {
        setAttempts(attempts + Number(requested));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts: {attempts}
            <Form.Group>
                <Form.Label>Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={subAttempts} disabled={attempts <= 0}>
                Use
            </Button>
            <Button onClick={addAttempts}>Gain</Button>
        </div>
    );
}
