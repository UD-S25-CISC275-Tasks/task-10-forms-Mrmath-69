import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "brown",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        label={color}
                        value={color}
                        name="color-radios"
                        onChange={updateColor}
                        checked={selectedColor === color}
                        style={{ color: color }}
                    />
                ))}
            </Form>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    width: "fit-content",
                    borderRadius: "5px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
