import type { ProjectData } from '@/types'

export const projectData: ProjectData[] = [
  {
    title: 'Graduation project',
    projects: [
      {
        text: 'XCloud',
        description:
          'Xcloud is a FastAPI-based API wrapper for local Ollama LLM services, featuring Faster-Whisper transcription, RAG support with ChromaDB, and web search capabilities, and more are coming.',
        icon: 'i-carbon-logo-github',
        href: 'https://github.com/rashadalsharpini/xcloud',
      },
      {
        text: 'Whisper Stt',
        description:
          'This project uses the faster-whisper library to provide fast and accurate audio and video transcription. It can be used to transcribe single files or to watch a directory and automatically transcribe new files as they are added. ',
        icon: 'i-carbon-logo-github',
        href: 'https://github.com/rashadalsharpini/whisperstt',
      },
    ],
  },
  {
    title: 'Open Source Community',
    projects: [
      {
        text: 'SageMath',
        description:
          'Sage is open source mathematical software released under the GNU General Public Licence GPLv2+, and includes packages that have compatible software licenses. People all around the globe have contributed to the development of Sage. Full documentation is available online.',
        icon: 'i-carbon-logo-github',
        href: 'https://github.com/sagemath/sage/issues?q=author%3Arashadalsharpini',
      },
    ],
  },
]
