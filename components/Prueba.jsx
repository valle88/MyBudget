import { useState } from "react"
import { TextInput, View, Button, Alert } from "react-native"


const Preba=()=>{
    const [total, setTotal]= useState(0)
    const [numeroUno, setNumeroUno]=useState(0)
    const [numeroDos, setNumeroDos]= useState(0)
    const suma=()=>{
        const res = Number(total) 
        const num1 = Number(numeroUno)
        const num2 = Number(total)
        const hola = (res + num1)
       alert(hola)
    }


    return(
        <View>
            <TextInput 
             keyboardType={"number-pad"}
            onChange={setTotal}
            >tu saldo es {(suma)} </TextInput>

            <TextInput 
            keyboardType={"Number-pad"}
            onChangeText={setNumeroUno}
            placeholder="Primer Numero"/>
            
            <Button 
            onPress={suma}
            title="hola"/>
        </View>
    )
}
export default Preba