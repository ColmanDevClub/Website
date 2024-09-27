import React, { useState, useEffect } from 'react';
import './colorSelect.css';
import ArrowIcon from './ArrowIcon';

const ColorSelect = ({ colors, onColorSelect, defaultValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState({});

    useEffect(() => {
        if (defaultValue) {
            const defaultColor = colors[defaultValue]; 
            if (defaultColor) {
                setSelectedColor({ key: defaultValue, value: defaultColor });
            } else {
                setSelectedColor({ key: Object.keys(colors)[0], value: colors[Object.keys(colors)[0]] }); 
            }
        } else {
            const firstKey = Object.keys(colors)[0];
            setSelectedColor({ key: firstKey, value: colors[firstKey] }); 
        }
    }, [colors, defaultValue]);

    const handleColorChange = (key) => {
        const color = colors[key];
        setSelectedColor({ key, value: color });
        onColorSelect({ key, value: color });
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative', width: '100px' }}>
            <div
                className="selected-color"
                onClick={() => setIsOpen(!isOpen)}
                style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',borderRadius: '4px',cursor: 'pointer',padding: '5px',}}
            >
                <div className="color-circle" style={{ backgroundColor: selectedColor.value }} />
                <ArrowIcon style={{ marginLeft: 'auto', color: '#ffffff' }} />
            </div>
            {isOpen && (
                <div className="dropdown">
                    {Object.keys(colors).map((key) => (
                        <div
                            key={key}
                            onClick={() => handleColorChange(key)}
                            className="dropdown-option"
                            style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#0e0e27', cursor: 'pointer' }}
                        >
                            <div className="color-circle-option" style={{ backgroundColor: colors[key] }} />
                            <span style={{ color: '#ffffff', fontSize: '11px', marginLeft: '10px' }}>{key}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorSelect;
