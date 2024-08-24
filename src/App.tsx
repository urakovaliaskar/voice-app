import { FC } from 'react';
import { Navbar, MainContent, VoiceList } from 'components';

export type Voice = {
  name: string,
  id: string,
  url: string
  image: string
}

const App: FC = () => {

  const voiceList: Voice[] = [
    {
      name: 'Male Voice 1',
      id: 'voice_1',
      url: 'Carl.wav',
      image: require('./assets/m1.jpg')
    },
    {
      name: 'Male Voice 2',
      id: 'voice_2',
      url: 'Ken.wav',
      image: require('./assets/m2.jpg')
    },
    {
      name: 'Female Voice 1',
      id: 'voice_3',
      url: 'Katya.wav',
      image: require('./assets/f1.jpg')
    },
    {
      name: 'Female Voice 2',
      id: 'voice_4',
      url: 'Kessi.wav',
      image: require('./assets/f2.jpg')
    },
  ]
  return (
    <>
      <Navbar />
      <main className='container mx-auto max-w-3xl p-8'>
        <MainContent list={voiceList} />
        <VoiceList list={voiceList} />
      </main>
    </>
  );
}

export default App;
