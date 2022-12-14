import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { MainConProps } from './types'
import { useStore } from 'src/hooks/store'
import MainPresenter from './Presenter'
import { DefautlLayout } from 'src/components/layout/default-layout'

const MainContainer = ({ ...props }: MainConProps): ReactElement => {
  //service logic
  const router = useRouter()

  const { isDark, toggleIsDark } = useStore()

  return (
    <MainPresenter
      {...props}
      isDark={isDark}
      toggleIsDark={toggleIsDark}
    ></MainPresenter>
  )
}

MainContainer.getLayout = (page: any) => <DefautlLayout>{page}</DefautlLayout>

export default MainContainer
