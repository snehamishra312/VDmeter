import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import Color from '../assets/Images/Color';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicter from '../ActivityIndicter';

const LogIn = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputData, setInputData] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [inputData]);

  const handleOnPress = async () => {
    if (inputData !== '') {
      const data = {
        verify_code: inputData,
      };
      setLoader(true);
      await Axios({
        method: 'POST',
        url: `https://vdmeter.com/vd_meter/veryfi_code.php?verify_code=${inputData}`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        setLoader(false);
        console.log('res===>', res.data.code);
        if (res.data.code == '1') {
          navigation.navigate('Home');
          setModalVisible(false);
          setError('');
          AsyncStorage.setItem('logIn', JSON.stringify('login'));
        } else {
          setLoader(false);
          setError('Introduzca el código de desbloqueo correcto');
        }
      });
    } else {
      setLoader(false);
      setError('Introduzca el código de desbloqueo correcto');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/Images/logo.png')}
        />
      </View>
      <ScrollView style={{height: responsiveScreenHeight(100)}}>
        <View style={styles.titleBox}>
          <Text style={styles.text2}>
            TÉRMINOS Y CONDICIONES{'\n'}DE USO DE LA APLICACIÓN VD-METER
          </Text>
        </View>
        <View style={{marginBottom: '10%'}}>
          <Text style={styles.text3}>1. TÉRMINOS Y CONDICIONES DE USO. </Text>
          <Text style={styles.text4}>
            1.1. Los Términos y Condiciones explican las responsabilidades
            adoptadas por el usuario desde el momento en que descarga e instala
            la aplicación denominada como “VD-METER” y a los efectos de la
            utilización de la misma (en adelante la “Aplicación”). El uso de la
            Aplicación deberá efectuarse de conformidad con los presentes
            Términos y Condiciones y los documentos complementarios que
            eventualmente resulten pertinentes. En consecuencia, toda aquella
            persona que descargue, acceda y/o utilice la Aplicación, deberá leer
            atentamente los presentes Términos y Condiciones, y aceptarlos en su
            totalidad. La descarga, acceso y uso de la Aplicación, es
            absolutamente voluntario.
          </Text>
          <Text style={styles.text4}>
            1.2. Mediante el sólo hecho de descargar la Aplicación, el usuario
            reconoce y acepta los presentes Términos y Condiciones. Si usted no
            está de acuerdo con estos Términos y Condiciones, por favor no
            utilice la Aplicación o interactúe de alguna otra manera con la
            misma. La descarga y/o uso de esta Aplicación se considerará como
            una aceptación a cada una las cláusulas, puntos, y demás términos y
            condiciones que se mencionan en este documento.
          </Text>
          <Text style={styles.text4}>
            1.3. La descarga/instalación de la Aplicación constituye el
            consentimiento expreso del usuario a utilizar la misma sin
            contravenir la legislación vigente, la buena fe y el orden público.
            Las violaciones a estos Términos y Condiciones y/o a cualquiera de
            las condiciones particulares y/o la omisión o actos por parte del
            usuario respecto de la Aplicación, sus servicios y/o contenidos, que
            a exclusivo criterio de VERTICAL-D EIRL constituyan conductas
            abusivas, lesivas o ilícitas, generarán el derecho a favor de
            VERTICAL-D EIRL de denegar de manera inmediata el acceso a la
            Aplicación al usuario en falta.
          </Text>
          <Text style={styles.text3}>2. APLICACIÓN - ACCIONES: </Text>
          <Text style={styles.text4}>
            2.1. La Aplicación gratuita estará disponible en dos versiones: iOS
            y Android. Y solo los usuarios que hayan comprado el dispositivo
            VD-METER podrán tener acceso al código de desbloqueo de la
            aplicación. Las opciones de acciones a realizar mediante la
            utilización de la Aplicación dependerán de la marca y modelo del
            equipo móvil{' '}
          </Text>
          <Text style={styles.text4}>
            2.3. Para instalar y acceder a la Aplicación, los usuarios deberán
            ingresar en AppStore o PlayStore y proceder a la descarga de la
            versión de la Aplicación que corresponda. Para ello los usuarios
            únicamente deberán hacer “click” sobre el botón “Descargar” y la
            Aplicación comenzará a descargarse e instalarse en el equipo móvil
            del usuario. Adicionalmente, al momento de acceder por primera vez a
            la Aplicación, se le pedirá al usuario ingresar un código de
            desbloqueo, este código será entregado al usuario vía mail, o bien,
            este se encontrará en el manual de instrucciones del dispositivo
            VD-METER.
          </Text>
          <Text style={styles.text4}>
            2.4. La Aplicación se instalará en el equipo móvil del usuario en la
            plataforma de Aplicaciones, la cual se creará acceso directo en la
            pantalla principal. No obstante, el usuario podrá optar por usar la
            aplicación en otra plataforma del equipo móvil.
          </Text>
          <Text style={styles.text3}>
            3. RESTRICCIONES GENERALES APLICABLES LOS USUARIOS DE LA APLICACIÓN.
          </Text>
          <Text style={styles.text4}>
            3.1. Actos Prohibidos. Los usuarios que accedan y utilicen esta
            Aplicación: (a) no violentarán los derechos de marca, patente,
            secretos comerciales, ni lo derechos de propiedad intelectual,
            derechos de publicidad y/o derechos de privacidad; (b) no
            violentarán ninguna ley, estatuto, ordenanza y/o reglamento; (c) no
            deberán utilizar virus, gusanos, bombas de tiempo, ni cualquier otra
            programación que afecte directa o indirectamente, o que intercepte,
            interfiera o cause daño en la Aplicación (d) no deberán violentar
            ninguna política de VERTICAL-D EIRL relacionada al uso de la
            Aplicación, de lo contrario, el acceso de los usuarios a la misma
            podrá ser bloqueado o cancelado inmediatamente por VERTICAL-D EIRL.
          </Text>
          <Text style={styles.text4}>
            3.2. El usuario reconoce y acepta que aunque la descarga,
            instalación y utilización de esta Aplicación pueda realizarse desde
            cualquier parte del mundo, la descarga, instalación, acceso y uso de
            la misma será considerado y evaluado según las leyes de la República
            de Chile. Si el usuario descarga, instala, accede y hace uso de esta
            Aplicación desde otro país, será exclusivamente responsable también,
            del cumplimiento de la legislación aplicable en dicha jurisdicción.
          </Text>
          <Text style={styles.text3}>4. PROPIEDAD INTELECTUAL.</Text>
          <Text style={styles.text4}>
            4.1. La Aplicación “VD-METER”, incluyendo, pero sin limitarse a su
            contenido en general, texto, marcas, logos, promoción, imágenes y
            cualquier otra forma de propiedad intelectual de la Aplicación, es
            propiedad única y exclusiva de VERTICAL-D EIRL. VERTICAL-D EIRL
            posee los derechos de autor y de propiedad intelectual sobre esta
            Aplicación y su contenido, y sólo le otorga al usuario el derecho
            limitado de descargar y utilizar la Aplicación, en tanto su descarga
            sea utilizada solamente para su uso personal y respete en su
            totalidad los presentes Términos y Condiciones.
          </Text>
          <Text style={styles.text4}>
            4.2. El usuario reconoce y acepta que no tiene ningún derecho sobre
            La Aplicación y/o sobre el contenido de la misma y que no
            modificará, editará, alterará, ni cambiará el contenido de la
            Aplicación de forma alguna. Este derecho limitado terminará
            automáticamente, sin notificación alguna, si usted incumple
            cualquiera de estos términos. El usuario reconoce y acuerda que el
            nombre “VD-METER”, el derecho de marca, texto, logos, promoción,
            imágenes y cualquier otro material incluido en esta Aplicación son
            propiedad de VERTICAL-D EIRL o han sido licenciados por VERTICAL-D
            EIRL. Cualquier otro uso distinto al autorizado a través del
            presente documento se encuentra prohibido a menos que el usuario
            obtenga el previo permiso escrito de VERTICAL-D EIRL.
          </Text>
          <Text style={styles.text4}>
            4.3. VERTICAL-D EIRL no concede ninguna licencia o autorización de
            uso de ninguna clase sobre sus derechos de propiedad intelectual o
            sobre cualquier otra propiedad o derecho relacionado con la
            Aplicación, las marcas, los servicios o el contenido de la
            Aplicación. A fin de evitar cualquier duda al respecto, nada de lo
            establecido en estos Términos y Condiciones podrá ser considerado
            como una autorización, licencia, venta, transmisión o cesión de
            derechos a favor del usuario o cualquier otro tercero.-
          </Text>
          <Text style={styles.text3}>6. OBLIGACIONES DEL USUARIO.</Text>
          <Text style={styles.text4}>
            6.1. El usuario se obliga a no (i) interferir o interrumpir el sitio
            www.vdmeter.com, ni la Aplicación, ni sus servidores, ni a
            desobedecer cualquier requisito, procedimiento, política o
            regulación de la Aplicación; y (ii) violar con o sin intención
            alguna ley local, estatal, nacional o internacional aplicable y
            cualquier otra regulación.
          </Text>
          <Text style={styles.text4}>
            6.2. Si el usuario causara una interrupción técnica del sitio
            www.vdmeter.com y/o de la Aplicación, sus servicios y/o acciones, el
            usuario asume la responsabilidad por todos los costos y gastos
            (incluyendo honorarios de abogados) que pudieren surgir como
            consecuencia de dicha interrupción.
          </Text>
          <Text style={styles.text4}>
            6.3. El usuario responderá por los daños y perjuicios de toda
            naturaleza que VERTICAL-D EIRL pudieran sufrir como consecuencia del
            incumplimiento de cualquiera de las obligaciones a las que queda
            sometido a través de los presentes Términos y Condiciones. En el
            hipotético caso de que VERTICAL-D EIRL tuvieran que afrontar
            sanción, multa, condena o indemnización de cualquier tipo que
            hubiere provocado el usuario ante el incumplimiento de cualquiera de
            los puntos establecidos en los presentes Términos y Condiciones, el
            usuario deberá reembolsar la cantidad que se hubiere abonado por tal
            motivo en un plazo de treinta (30) días corridos de recibida la
            notificación en tal sentido.
          </Text>
          <Text style={styles.text3}>7. LIMITACIÓN DE RESPONSABILIDAD.</Text>
          <Text style={styles.text4}>
            7.1. Se deja expresamente establecido que VERTICAL-D ERIL no tendrán
            responsabilidad alguna por los daños que deriven del uso o uso
            indebido de la Aplicación, ni por las pérdidas o daños de cualquier
            naturaleza que fuere con motivo de: (i) la descarga y/o utilización
            incorrecta de la Aplicación; (ii) fallas técnicas individuales,
            conjuntas o colectivas en el sistema, fallas en su equipo, etc.
            derivados de la descarga y/o utilización de la Aplicación.
          </Text>
          <Text style={styles.text4}>
            7.2. VERTICAL-D EIRL puede garantizar que las funciones contempladas
            en la Aplicación serán ininterrumpidas o que estarán libres de
            errores, que los defectos serán corregidos o que esta Aplicación o
            el sitio en la cual ésta se encuentra disponible están libres de
            virus u otros elementos dañinos. VERTICAL-D EIRL efectúa ninguna
            declaración o garantía respecto del uso de la Aplicación en cuanto a
            si la misma es adecuada, útil o confiable. Por lo anterior es de
            exclusiva responsabilidad del usuario la determinación de si
            efectivamente el resultado dado por la aplicación es en efecto
            precisa.
          </Text>
          <Text style={styles.text4}>
            7.3. Con el mayor alcance permitido por la legislación aplicable, el
            usuario entiende y acuerda que VERTICAL-D EIRL, ni sus respectivas
            subsidiarias y/o afiliadas serán responsables por cualquier daño
            directo, indirecto, incidental, especial, mediato, inmediato,
            consecuente, punitivo o cualquier otro, relativo o resultante del
            uso o de su incapacidad de usar la Aplicación. Estos incluyen daños
            por errores, omisiones, interrupciones, defectos, atrasos, virus
            informáticos, su lucro cesante, pérdida de datos, acceso no
            autorizado y alteración de sus transmisiones y datos, y otras
            pérdidas tangibles e intangibles.
          </Text>
          <Text style={styles.text4}>
            7.4. VERTICAL-D EIRL respetará en todo momento la Ley de Protección
            de Datos personales y mantendrá la más plena reserva sobre los datos
            e información de carácter confidencial que los usuarios manipulen
            y/o traten, en el uso de la Aplicación.
          </Text>
          <Text style={styles.text3}>8. RENUNCIA DE GARANTÍAS.</Text>
          <Text style={styles.text4}>
            El usuario reconoce y acepta que la utilización de la Aplicación es
            a su propio riesgo. VERTICAL-D EIRL no tendrá responsabilidad por
            cualquier error u omisión dentro de la misma, incluyendo cualquier
            error u omisión causado por la Aplicación o su contenido. El usuario
            reconoce y acepta que VERTICAL-D EIRL no ofrece garantía o
            representación en cuanto a la disponibilidad de la Aplicación o
            cualquier parte de la misma, y que la misma puede ser inaccesible
            por tiempos prolongados (debido a problemas del proveedor de
            Internet o cualquier otra eventualidad) y que VERTICAL-D EIRL no
            tendrá responsabilidad alguna por cualquier error, o no
            disponibilidad de la Aplicación.
          </Text>
          <Text style={styles.text3}>9. AVISO. </Text>
          <Text style={styles.text4}>
            ESTA APLICACIÓN Y TODOS LOS SERVICIOS PROVISTOS EN LA MISMA SE
            PROVEEN EN EL ESTADO EN EL QUE SE ENCUENTRAN, SIN NINGÚN TIPO DE
            GARANTÍAS, YA SEA EXPRESAS, IMPLÍCITAS, Y/O ESTATUTARIAS, INCLUYENDO
            SIN LIMITACIÓN, LAS GARANTÍAS EN CUANTO AL USO APROPIADO DE LA
            APLICACIÓN Y QUE LA MISMA RESULTE APTA PARA UN PROPÓSITO ESPECÍFICO
            Y NO INFRINJA LA LEGISLACIÓN VIGENTE. CONFORME A LO PERMITIDO POR LA
            LEY. VERTICAL-D EIRL NO OTORGA GARANTIA ALGUNA EN CUANTO A LA
            SEGURIDAD, CONFIABILIDAD Y UTILIZACIÓN CORRECTA DE LA APLICACIÓN.
            VERTICAL-D EIRL NO SERÁ RESPONSABLE POR CUALQUIER DAÑO A SU SISTEMA
            DE COMPUTADORA O PÉRDIDA DE INFORMACIÓN QUE PUDIERA RESULTAR COMO
            CONSECUENCIA DE LA DESCARGA Y UTILIZACIÓN DE LA APLICACIÓN.
          </Text>
          <Text style={styles.text3}>
            10.- MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES.{' '}
          </Text>
          <Text style={styles.text4}>
            VERTICAL-D EIRL podrá modificar la Aplicación y/o los Términos y
            Condiciones vinculados con la misma en cualquier momento, sin previa
            notificación y a su exclusivo criterio. Dichas modificaciones
            tendrán vigencia a partir del mismo momento en que sean publicadas o
            desde el momento en que VERTICAL-D EIRL lo indique expresamente.
            Será responsabilidad del usuario monitorear dichos cambios y
            determinar si continuará, o no, utilizando la aplicación.
          </Text>
          <Text style={styles.text3}>11. INDEMNIZACIÓN.</Text>
          <Text style={styles.text4}>
            Al utilizar esta Aplicación, el usuario acuerda relevar, indemnizar
            y defender a VERTICAL-D EIRL y sus empresas matriz, subsidiarias,
            afiliadas, directores, oficiales, consultores y empleados, ante
            cualquier reclamo de terceros, incluyendo honorarios de abogados que
            pudieran surgir como consecuencia del uso indebido de la Aplicación.
          </Text>
          <Text style={styles.text3}>12. LEY APLICABLE.</Text>
          <Text style={styles.text4}>
            12.1. Estos Términos y Condiciones se regirán e interpretarán por la
            legislación de la República de Chile. Si cualquier disposición de
            estas condiciones generales de uso fuese declarada inválida o nula
            por autoridad judicial o gubernamental, la declaración de nulidad o
            invalidez de dicha disposición no afectará a las restantes, las
            cuales permanecerán completamente vigentes y exigibles. La falta de
            ejercicio por parte VERTICAL-D EIRL de cualquiera de sus derechos
            conforme a lo dispuesto en estos Términos y Condiciones no afectará
            la facultad de VERTICAL-D EIRL de exigirlo en el futuro.
          </Text>
          <Text style={styles.text4}>
            12.2. Para cualquier disputa que pudiere surgir como consecuencia de
            la descarga y utilización de la Aplicación, VERTICAL-D EIRL y el
            usuario, con renuncia expresa a cualquier otro fuero o jurisdicción
            que pudiera corresponderles, se someten a la jurisdicción y
            competencia de los tribunales ordinarios de la Capital de la
            República de Chile.
          </Text>
          <Text style={styles.text3}>13. NOTIFICACIONES.</Text>
          <Text style={styles.text3}>
            Toda notificación u otra comunicación que deba efectuar VERTICAL-D
            EIRL al usuario respecto de cualquier tema referido a la relación
            vigente entre el usuario y VERTICAL-D EIRL podrá realizarse a través
            del sitio www.vdmeter.com. En todo momento el usuario podrá
            comunicarse con VERTICAL-D EIRL por medio de correo electrónico a
            contacto@vdmeter.com.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.lastButton}
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 18, color: Color.white, fontWeight: '600'}}>
            aceptar
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modelBox}>
          <View style={styles.box1}>
            <Text style={styles.text1}>ingrese código de desbloqeo</Text>
          </View>
          <TextInput
            style={styles.inputBox}
            autoCapitalize="none"
            placeholderTextColor={'#7e7f80'}
            aot
            value={inputData}
            placeholder="ingrese código de desbloqeo"
            onChangeText={val => setInputData(val)}
          />
          {error && <Text style={styles.err}>{error}</Text>}
          <View style={styles.box2}>
            <TouchableOpacity
              style={styles.btnBox}
              onPress={() => handleOnPress()}>
              <Text style={{color: 'white'}}>aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={[styles.btnBox, {backgroundColor: 'white'}]}>
              <Text style={{color: 'black'}}>cancelar</Text>
            </TouchableOpacity>
          </View>
          {loader && <ActivityIndicter show={loader} />}
        </View>
      </Modal>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightBlue,
  },
  header: {
    height: '8%',
    backgroundColor: Color.backGroundColor,
  },
  logo: {
    height: '45%',
    width: '35%',
    resizeMode: 'contain',
    marginTop: '4%',
    marginLeft: '5%',
  },
  titleBox: {
    height: '2%',
    width: '70%',
    backgroundColor: Color.active,
    borderWidth: 2,
    borderColor: Color.whiteLight,
    marginTop: '10%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  lastButton: {
    height: 45,
    width: '55%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    // marginTop: '10%',
    marginBottom: '20%',
  },
  modelBox: {
    height: 270,
    width: '96%',
    backgroundColor: Color.white,
    borderWidth: 2,
    borderColor: Color.whiteLight,
    marginTop: '28%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  box1: {
    height: '20%',
    borderBottomWidth: 0.4,
    borderColor: 'black',
    justifyContent: 'center',
  },
  inputBox: {
    width: '90%',
    height: '18%',
    borderWidth: 0.4,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: '4%',
    alignSelf: 'center',
    paddingLeft: '2.5%',
    color: 'black',
  },
  box2: {
    height: '20%',
    borderTopWidth: 0.4,
    borderColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '12%',
    paddingHorizontal: '5%',
  },
  btnBox: {
    height: '80%',
    width: '30%',
    backgroundColor: '#37b823',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: '5%',
    borderWidth: 0.4,
    borderColor: 'black',
  },
  text2: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  text3: {
    marginLeft: '2%',
    fontSize: 16,
    color: 'black',
    marginTop: '2%',
  },
  text4: {
    marginLeft: '2%',
    marginTop: '2%',
    fontSize: 14,
    color: 'black',
  },
  err: {
    color: 'red',
    marginTop: '2%',
    marginLeft: '5%',
  },
});
