import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
    blanco: 'white',
    
}
export const tamaños = {
    pequeño: {
        fontSize: 10, // Ajusta según tus necesidades
        // Otros estilos si es necesario
      },
      mediano: {
        fontSize: 15, // Ajusta según tus necesidades
        // Otros estilos si es necesario
      },
    grande: {
        fontSize: 40, // Ajusta según tus necesidades
        // Otros estilos si es necesario
      },    
}


export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
    

});