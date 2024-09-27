// ColorSelect.js
import React, { useState, useEffect } from 'react';
import './colorSelect.css';
import ArrowIcon from './ArrowIcon';

const ColorSelect = ({ colors, onColorSelect, defaultValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState({});

    useEffect(() => {
        const initialKey = defaultValue || Object.keys(colors)[0];
        const initialColor = colors[initialKey] || colors[Object.keys(colors)[0]];
        setSelectedColor({ key: initialKey, value: initialColor });
    }, [colors, defaultValue]);

    const handleColorChange = (key) => {
        const color = colors[key];
        setSelectedColor({ key, value: color });
        onColorSelect({ key, value: color });
        setIsOpen(false);
    };

    return (
        <div className="color-select" onClick={() => setIsOpen(!isOpen)}>
            <div className="selected-color">
                <div className="color-circle" style={{ backgroundColor: selectedColor.value }} />
                <ArrowIcon className="arrow-icon" />
            </div>
            {isOpen && (
                <div className="dropdown">
                    {Object.keys(colors).map((key) => (
                        <div
                            key={key}
                            onClick={() => handleColorChange(key)}
                            className="dropdown-option"
                        >
                            <div className="color-circle-option" style={{ backgroundColor: colors[key] }} />
                            <span className="option-label">{key}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorSelect;
