import type { ProjectData } from '@/types'

export const projectData: ProjectData[] = [
  {
    title: 'Graduation project',
    projects: [
      {
        text: 'xcloud',
        description: 'Short description of the project.',
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
]
