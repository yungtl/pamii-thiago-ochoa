import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Imports dos componentes locais do Gluestack v3 ajustados para a raiz (./)
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import { Card } from './components/ui/card';
import { Avatar, AvatarImage, AvatarFallbackText } from './components/ui/avatar';
import { Button, ButtonText } from './components/ui/button';
import { Heading } from './components/ui/heading';

export default function App() {
  return (
    <GluestackUIProvider>
      <View style={styles.container}>
        
        {/* Card customizado com Tailwind (Gluestack v3) */}
        <Card 
          variant="elevated" 
          className="p-6 rounded-2xl bg-white shadow-xl border border-zinc-100 max-w-[380px] w-full mx-4"
        >
          
          {/* Header do Card: Avatar + Nome + Badge fictício */}
          <View style={styles.headerRow}>
            <Avatar size="lg" className="mr-4 ring-2 ring-indigo-100 p-0.5 rounded-full">
              <AvatarFallbackText>Diana Tech</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
                }}
                alt="Foto de Perfil"
              />
            </Avatar>
            
            <View style={styles.headerTextContainer}>
              <Heading size="xl" className="text-zinc-900 font-bold tracking-tight">
                Diana Tech
              </Heading>
              <Text style={styles.subtitle}>Desenvolvedora Full-Stack</Text>
              
              {/* Badge sutil de status */}
              <View style={styles.badge}>
                <View style={styles.badgeDot} />
                <Text style={styles.badgeText}>Disponível para freelas</Text>
              </View>
            </View>
          </View>

          {/* Divisor visual elegante */}
          <View style={styles.divider} />

          {/* Biografia / Descrição */}
          <Text style={styles.bodyText}>
            Especialista em criar interfaces modernas, fluidas e de alta performance utilizando o ecossistema React Native, Expo e Gluestack-UI v3.
          </Text>

          {/* Botão de Ação Principal repaginado */}
          <Button
            size="lg"
            variant="solid"
            action="primary"
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl h-12 justify-center shadow-md shadow-indigo-200 transition-all"
            onPress={() => alert('Abrindo Portfólio no GitHub...')}
          >
            <ButtonText className="font-semibold text-sm tracking-wide">
              Acessar Portfólio
            </ButtonText>
          </Button>
          
        </Card>

      </View>
    </GluestackUIProvider>
  );
}

// Estilos estruturais e cores de fallback
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Fundo slate-50 bem moderno e limpo
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1', // Roxo/Indigo moderno para a profissão
    marginTop: 2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4', // Fundo verde bem clarinho
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 6,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#22c55e', // Ponto verde ativo
    marginRight: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#16a34a',
  },
  divider: {
    height: 1,
    backgroundColor: '#f4f4f5',
    marginVertical: 18,
  },
  bodyText: {
    fontSize: 14,
    color: '#52525b', // Tom cinza suave para melhor leitura
    lineHeight: 22,
    marginBottom: 20,
  },
});