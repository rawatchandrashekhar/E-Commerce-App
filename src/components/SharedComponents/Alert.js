import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Colors } from '../../assets/colors/Color';
import { FontFamily } from '../../assets/fonts/FontFamily';

const { width, height } = Dimensions.get('screen')

const AlertDanger = msg => {
    showMessage({
        message: `${msg}`,
        type: 'danger',
        titleStyle: { fontFamily: FontFamily.PoppinsMedium, textAlign: "center" },
        floating: true,
        style: { marginTop: 30, padding: 10, alignSelf: "center" },
        // position: { left: width * 0.1 }
    });
};

const AlertWarning = msg => {
    showMessage({
        message: `${msg}`,
        type: 'warning',
        titleStyle: { fontFamily: FontFamily.PoppinsMedium, textAlign: "center" },
        floating: true,
        style: { marginTop: 30, padding: 10, alignSelf: "center" },
    });
};

const AlertSuccess = msg => {
    showMessage({
        message: `${msg}`,
        type: 'success',
        titleStyle: { fontFamily: FontFamily.PoppinsMedium, textAlign: "center" },
        floating: true,
        style: { marginTop: 30, padding: 10, alignSelf: "center" },
    });
};

export { AlertDanger, AlertWarning, AlertSuccess };
