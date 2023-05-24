import './globals.css';

export const metadata = {
  title: 'QuizCraft',
  description: 'Create engaging learning materials and educational games for students to interact with. Our platform offers convenient access through both our website and mobile app.  Explore our user-friendly library of pre-made resources, providing teachers with a vast selection of materials for seamless integration into their lessons.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
