import React, { memo, useCallback, useMemo, useState } from 'react'
import { BellIcon, ChevronDownIcon, EllipsisVertical, SearchIcon } from 'lucide-react-native'
import SafeAreaView from '../../../components/SafeAreaView'
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { FlashList } from "@shopify/flash-list";
import IconButton from '../../../../res/components/IconButton'
import Accordion from '../../../components/Collapse'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import getInitials from '../../../../utils/string'
import { generateRandomColor } from '../../../../utils/colors'

const RenderClassListItem = ({ item, generateMemoizedColor, navigation }: any) => {
	const initials = getInitials(item.name);
	const backgroundColor = generateMemoizedColor();

	return (
		<Pressable
			onPress={() => navigation.navigate('ClassRoom', { classId: item.id, classRoomName: item.name })}
			android_ripple={{ color: "#0000000f" }}
			style={{
				paddingVertical: 8,
				overflow: 'hidden',
				paddingHorizontal: 8,
				marginHorizontal: 16,
				alignItems: 'center',
				flexDirection: 'row',
				backgroundColor: "#F7F7FC",
				borderRadius: 10,
				gap: 10,
			}}
		>
			<View style={{
				backgroundColor: backgroundColor,
				width: 60,
				height: 60,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 4
			}}>
				<Text style={{
					fontSize: 16,
					fontWeight: '600',
					textAlign: 'center',
					color: '#fff',
					alignSelf: 'center',
					justifyContent: 'center'
				}}>{initials}</Text>
			</View>
			<View style={{ flex: 1, gap: 4 }}>
				<Text style={{ fontSize: 14, color: '#212121' }} ellipsizeMode='tail' numberOfLines={1} lineBreakMode='tail'>
					{item.name}
				</Text>
				<Text style={{ fontSize: 12, color: '#9e9e9e' }}>{item.instructor}</Text>
				<Text style={{ fontSize: 12, color: '#9e9e9e' }}>{item.time}</Text>
			</View>
		</Pressable>
	);
};

const RenderUniversityListItem = ({ item, generateMemoizedColor, navigation }: any) => {
	const initials = getInitials(item.name);
	const backgroundColor = generateMemoizedColor();

	return (
		<Pressable
			onPress={() => navigation.navigate('Group', { groupId: item.id })}
			android_ripple={{ color: "#0000000f" }}
			style={{
				paddingVertical: 8,
				overflow: 'hidden',
				paddingHorizontal: 8,
				marginHorizontal: 16,
				alignItems: 'center',
				flexDirection: 'row',
				backgroundColor: "#F7F7FC",
				borderRadius: 10,
				gap: 10,
			}}
		>
			<View style={{
				backgroundColor: backgroundColor,
				width: 60,
				height: 60,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 4
			}}>
				<Text style={{
					fontSize: 16,
					fontWeight: '600',
					textAlign: 'center',
					color: '#fff',
					alignSelf: 'center',
					justifyContent: 'center'
				}}>{initials}</Text>
			</View>
			<View style={{ flex: 1, gap: 4 }}>
				<Text style={{ fontSize: 14, color: '#212121' }} ellipsizeMode='tail' numberOfLines={1} lineBreakMode='tail'>
					{item.name}
				</Text>
			</View>
		</Pressable>
	);
};

const ClassesScreen = () => {
	const navigation = useNavigation()

	const generateMemoizedColor = useCallback(() => generateRandomColor(), []);

	const classData = [
		{ id: 1, name: 'Computer Science Essentials', instructor: 'Dr. Ahmed', time: '9:00 AM - 10:00 AM' },
		{ id: 2, name: 'Artificial Intelligence', instructor: 'Dr. Mohamed', time: '10:00 AM - 11:00 AM' },
		{ id: 3, name: "Networking", instructor: 'Dr. Ahmed', time: '11:00 AM - 12:00 AM' },
		{ id: 4, name: 'Machine Learning', instructor: 'Dr. Mohamed', time: '12:00 AM - 1:00 AM' },
	];

	const universityData = [
		{ id: 2, name: 'University of Jordan' },
		{ id: 1, name: 'PSUT' },
		{ id: 3, name: "BAU" },
	];

	const ItemSeparator = useCallback(() => <View style={{ padding: 4 }} />, []);

	return (
		<SafeAreaView>
			<View style={{ flex: 1, gap: 2 }}>
				<View style={{
					position: 'relative', flexDirection: 'row', alignItems: 'center',
					borderWidth: 1,
					backgroundColor: '#F7F7FC',
					borderColor: '#E0E0E0',
					borderRadius: 6,
					paddingHorizontal: 8,
					marginBottom: 4,
					marginHorizontal: 16,
					gap: 4
				}}>
					<SearchIcon style={{ marginBottom: 3 }} size={24} color={'#ADB5BD'} />
					<TextInput
						style={{
							fontSize: 14,
							fontWeight: '600',
							color: '#212121',
							flex: 1
						}}
						placeholderTextColor={'#ADB5BD'}
						placeholder='Search for classes'
					/>
				</View>

				<ScrollView>
					<Accordion label="Classes" currentItemId={1}>
						{({ open }: any) => open === 1 && (
							<FlashList
								data={classData}
								renderItem={({ item }) => RenderClassListItem({ item, generateMemoizedColor, navigation })}
								keyExtractor={(item) => item.id.toString()}
								ItemSeparatorComponent={ItemSeparator}
								estimatedItemSize={200}
							/>
						)}
					</Accordion>

					<Accordion label="University" currentItemId={2}>
						{({ open }: any) => open === 2 && (
							<FlashList
								data={universityData}
								renderItem={({ item }) => RenderUniversityListItem({ item, generateMemoizedColor, navigation })}
								keyExtractor={(item) => item.id.toString()}
								ItemSeparatorComponent={ItemSeparator}
								estimatedItemSize={200}
							/>
						)}
					</Accordion>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default memo(ClassesScreen);
