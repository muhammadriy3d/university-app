import { ChevronDownIcon } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Accordion = (props: any) => {
	const { currentItemId, children, label } = props;
	const [open, setOpen] = useState<number>(1);

	const handleTriggerOpen = (index: number) => setOpen(index === open ? 0 : index);

	// deprecated should do it using context api

	return (
		<>
			<Pressable onPress={() => handleTriggerOpen(currentItemId)} style={{ flexDirection: 'row', gap: 8, alignItems: 'center', padding: 16, borderRadius: 16 }}>
				<ChevronDownIcon size={20} color={'#212121'} style={{ transform: [{ rotate: open === currentItemId ? '180deg' : '0deg' }] }} />
				<Text style={{ fontSize: 15, fontWeight: '700' }}>{label}</Text>
			</Pressable>
			<View>
				{children({ open, handleTriggerOpen })}
			</View>
		</>
	)
}

export default Accordion
