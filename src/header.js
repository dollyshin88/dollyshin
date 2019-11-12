import React from 'react';
import { Platform } from 'react-native';

const Header = () => {
    return (
        <div className='headerNav flexContainerRow'>
            <div className='headerLeft scriptType'><a href='#hello'>Dolly Shin</a></div>
            
                {(Platform.OS === 'web') ? (
                    <div className='horizontalButtonGroup'>
                    <div className='navLinks clickable link'><a href='#aboutSection'>About</a></div>
                    <div className='navLinks clickable link'><a href='#projectSection'>Projects</a></div>
                    <div className='navLinks clickable link'><a href='#connectSection'>Connect</a></div>
                    </div>
                ) : (
                    <></>
                    // <TouchableOpacity style={styles.menuBtn}>
                    //     <Text style={styles.headerTxt}>Menu</Text>
                    //     <i class="fas fa-bars"></i>
                    // </TouchableOpacity>    
                                   
                )}
            
        </div>
    );
}

// const styles = StyleSheet.create({
//     menuBtn: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         width: 70,
//         color: '#fff',
//         fontSize: "1.2rem"
//     },
//     headerTxt: {
//         color: '#fff',
//         fontSize: '1.2rem',
//         fontFamily: 'Montserrat-Regular',
//         marginBottom: 3
//     },
// })

export default Header;