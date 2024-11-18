import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';

const ScheduleList = ({ data }) => {
    const [selectedDay, setSelectedDay] = useState(null);

    const filteredData = selectedDay
        ? data.filter((item) => item.day.toLowerCase() === selectedDay.toLowerCase())
        : data; 

    const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

    return (
        <View className="flex-1">
            <View className="flex-row justify-between mb-4">
                {days.map((day) => (
                    <TouchableOpacity
                        key={day}
                        className={`px-4 py-2 rounded-lg ${
                            selectedDay === day ? 'bg-blue-500' : 'bg-neutral-300'
                        }`}
                        onPress={() => setSelectedDay(day)}
                    >
                        <Text
                            className={`text-center ${
                                selectedDay === day ? 'text-white' : 'text-black'
                            }`}
                        >
                            {day}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                className="px-4 py-2 mb-4 bg-red-500 rounded-lg"
                onPress={() => setSelectedDay(null)}
            >
                <Text className="text-center text-white">Show All</Text>
            </TouchableOpacity>

            <ScrollView>
                {filteredData.map((item) => (
                    <View key={item._id.toString()} className="mb-4">
                        <Text className="mb-2 text-xl font-bold">
                            {item.class} - {item.day}
                        </Text>

                        {item.subjects.map((subject, index) => (
                            <View key={index} className="flex-row p-4 mb-2 border rounded-lg">
                                <View className="items-center justify-center">
                                    <Text className="text-xl font-bold">
                                        {subject.time} 
                                    </Text>
                                </View>
                                <View className="h-full w-[1px] mx-4 bg-neutral-200" />
                                <View className="flex-1">
                                    <Text>{subject.name}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ScheduleList;
