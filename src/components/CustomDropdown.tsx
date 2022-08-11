import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

type customDropdownProps = {
  label: string;
  bc?: string; // border color
  bw?: number; // border width
  fc?: string; // focus color
  bgc?: string;
  dropdownValue: any;
  setDropdownValue: any;
  dropdownData: {
    label: string;
    value: string;
  }[];
};

const CustomDropdown = ({
  label,
  dropdownValue,
  setDropdownValue,
  dropdownData,
  bc = 'rgba(20,20,20,0.3)',
  bw = 2,
  fc = 'rgba(6,146,239,1)',
  bgc = 'transparent',
}: customDropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (dropdownValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: fc}]}>{label}</Text>
      );
    }
    return null;
  };

  return (
    <View style={{paddingTop: 16, backgroundColor: bgc}}>
      {renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: 'blue'},
          {borderColor: isFocus ? fc : bc, borderWidth: bw},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dropdownData}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? label : ''}
        searchPlaceholder="Search..."
        value={dropdownValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setDropdownValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? fc : bc}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'rgba(20,20,20,0.3)',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
