import {Spin} from 'antd'

const CustomLoading = (props: any) => {
  return (
    <div>
      <Spin spinning={props.loading} size="large" />
    </div>
  )
}

export default CustomLoading

export const loadingLoader = (loading: boolean) => {
  return <CustomLoading loading={loading} />
}