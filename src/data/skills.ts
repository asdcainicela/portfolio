export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['Python', 'C++20', 'Rust', 'CUDA', 'TensorRT']
    },
    {
        name: 'Computer Vision & AI',
        skills: ['CUDA', 'cuDNN', 'TensorRT', 'ONNX', 'OpenCV', 'YOLO', 'PyTorch', 'libtorch']
    },
    {
        name: 'Industrial IoT & Cloud',
        skills: ['LoRaWAN', 'MQTT (EMQX)', 'Azure IoT Hub', 'Modbus RS485', 'Shared Memory', 'Double Buffering', 'Docker', 'FRP']
    },
    {
        name: 'Hardware & Edge',
        skills: ['Jetson Orin/Nano', 'ESP32 (RAK3172)', 'FreeRTOS', 'Node-RED', 'ARM Cortex', 'STM32']
    },
    {
        name: 'Industrial & PLC',
        skills: ['CODESYS', 'IEC 61131-3', 'CAN/J1939', 'Modbus', 'RS485', 'MQTT']
    }
];
