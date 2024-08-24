import { FC, useEffect, useState } from 'react'
import { Voice } from 'App';

type Props = {
  list: Voice[]
}

export const MainContent: FC<Props> = ({ list }) => {
  const [text, setText] = useState<string>('');
  const [selectedId, setSelectedId] = useState<string>(list[0].id);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string>('');

  const generate = () => {
    if(text && selectedId) {
      setIsLoading(true);
      setTimeout(() => {
        const url = list.find(el => el.id === selectedId)?.url || '';

        setAudioUrl(url)
        setIsLoading(false);
      }, 3000);
    }
  }

  useEffect(() => {
    if (audioUrl) setAudioUrl('');
  }, [selectedId])

  return (
    <>
      <form className="max-w-full mx-auto">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your speech</label>
        <textarea onChange={(e) => setText(e.target.value)} value={text} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your text..."></textarea>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a voice</label>
        <select onChange={e => setSelectedId(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {list.map(({ name, id }) => <option selected={selectedId === id} key={id} value={id}>{name}</option>)}
        </select>
        <button onClick={generate} type="button" disabled={isLoading || !text || !selectedId} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-8 w-full ${isLoading || !text || !selectedId ? 'opacity-50' : ''}`}>Generate</button>
      </form>
      {audioUrl && (
      <audio controls className='mt-6 w-full'>
        <source src={require(`../../assets/${audioUrl}`)} type="audio/wav" />
        Your browser does not support the audio tag.
      </audio>
    )}
    </>
  )
}
