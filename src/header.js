import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <div className='headerNav flexContainerRow'>
            <div className='headerLeft scriptType'>Dolly Shin</div>
            
                {(Platform.OS === 'web') ? (
                    <div className='horizontalButtonGroup'>
                        <div className='navLinks clickable link'>About</div>
                    <div className='navLinks clickable link'>Projects</div>
                    <div className='navLinks clickable link'>Connect</div>
                    </div>
                ) : (
                    
                    <TouchableOpacity style={styles.menuBtn}>
                        <Text style={styles.headerTxt}>Menu</Text>
                        <i class="fas fa-bars"></i>
                    </TouchableOpacity>    
                                   
                )}
            
        </div>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fac055',
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        position: "fixed",
        top: 0,
        zIndex: 2
    },
    menuBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 70,
        color: '#fff',
        fontSize: "1.2rem"
    },
    headerTxt: {
        color: '#fff',
        fontSize: '1.2rem',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 3
    },
    headerLeft: {
        fontSize: 30,
        fontFamily: 'Caveat-Bold',
        color: '#fff'
    }
})

export default Header;