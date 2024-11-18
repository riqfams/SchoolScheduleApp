import { Text, SafeAreaView, StatusBar, View, ScrollView } from 'react-native';
import React from 'react';
import ScheduleList from './components/ScheduleList';
import Colors from './styles/color';
import realm from './data/RealmDatabase';

export default function Index() {
    const fetchScheduleData = () => {
        const schedules = realm.objects("Schedule");
        
        return schedules.map(schedule => ({
            ...schedule,
            subjects: schedule.subjects.map(subject => ({ ...subject }))
        }));
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" backgroundColor={Colors.lightBlue} />
            <ScrollView className="mt-8">
                <View className="p-8 pb-20" style={{ backgroundColor: Colors.lightBlue }}>
                    <Text className="text-3xl font-bold">
                        Hi, John
                    </Text>
                    <Text className="text-base">
                        Here is a list of schedules you need to check
                    </Text>   
                </View>
                <View className="p-8 -mt-12 bg-white" style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                    <ScheduleList
                        data={fetchScheduleData()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
