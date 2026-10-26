import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
  StatusBar
} from 'react-native';

export default function App() {
  const services = [
    '🎨 تصميم الشعارات',
    '📢 تصميم الإعلانات',
    '🖼️ تصاميم التواصل الاجتماعي',
    '💎 تصميم الهوية البصرية',
    '🎬 الصور المصغرة للفيديوهات'
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#071426" />

      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>ع</Text>
          </View>

          <Text style={styles.title}>عرفات البحري</Text>

          <Text style={styles.subtitle}>
            مصمم جرافيك بالذكاء الاصطناعي
          </Text>

          <Text style={styles.description}>
            تصاميم احترافية | أفكار مبتكرة
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>من أنا؟</Text>

          <Text style={styles.paragraph}>
            أنا عرفات البحري، مصمم جرافيك متخصص
            في التصاميم الإبداعية والإعلانات
            والهويات البصرية.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>خدماتي</Text>

          {services.map((service, index) => (
            <View key={index} style={styles.service}>
              <Text style={styles.serviceText}>
                {service}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>
            هل تريد تصميمًا مميزًا؟
          </Text>

          <Text style={styles.paragraph}>
            تواصل معي لطلب خدمات التصميم.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                'https://wa.me/967783843786'
              )
            }
          >
            <Text style={styles.buttonText}>
              تواصل عبر واتساب
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          جميع الحقوق محفوظة © عرفات البحري
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071426'
  },

  content: {
    padding: 16,
    paddingBottom: 30
  },

  header: {
    alignItems: 'center',
    paddingVertical: 30
  },

  logo: {
    width: 85,
    height: 85,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#287BFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoText: {
    color: '#65A3FF',
    fontSize: 36,
    fontWeight: 'bold'
  },

  title: {
    color: '#65A3FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 17,
    marginTop: 10
  },

  description: {
    color: '#A9BAD0',
    marginTop: 12
  },

  card: {
    backgroundColor: '#10223B',
    borderRadius: 15,
    padding: 18,
    marginBottom: 16
  },

  heading: {
    color: '#65A3FF',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },

  paragraph: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center'
  },

  service: {
    backgroundColor: '#183454',
    padding: 14,
    borderRadius: 10,
    marginVertical: 5
  },

  serviceText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#1677FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 18
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  footer: {
    color: '#A9BAD0',
    textAlign: 'center',
    marginTop: 10
  }
});