import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    // Handlers
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="editModeSwitch">
                <Form.Check
                    type="switch"
                    id="edit-switch"
                    label="Edit Mode"
                    checked={edit}
                    onChange={updateEditMode}
                />
            </Form.Group>

            {edit ?
                <Form.Group controlId="editModeForm">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />

                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                        className="mt-2"
                    />
                </Form.Group>
            :   <div>
                    {name} is {student ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}
