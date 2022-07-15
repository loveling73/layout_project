import React from "react";
import { Button,Input,Image,Typography} from "antd";
import { UserOutlined,KeyOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

const { Link } = Typography;

function Login() {
  return (
    <div className="flex justify-center items-center flex-col" style={{height: '100vh'}}>
      <div className="box-border h-85 w-96 p-3 border-4">
        <div className="text-center flex justify-center items-center"size={12}>
          <Image    
          width={50}
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/83211306_2712030362259164_3197319353317982208_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UbL3EZiaISQAX_n3Tjw&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-tmQtkg6IAjhAoK7RYvxPuw7kyGBtprPBMiSPfNXJZHg&oe=62E93EFA" />
          <span className="text-2xl font-bold "> Ngọc Thắng </span>        
        </div>
          <h2 className="mt-5"> Tài khoản</h2>
          <Input className="" size="large" placeholder="Tài khoản" prefix={<UserOutlined/>} />   
          <h2 className="mt-2"> Mật khẩu</h2>
          <Input.Password 
            className="" 
            size="large"    
            placeholder="Mật khẩu"
            prefix={<KeyOutlined/>}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <div className="text-right my-3">         
            <Link href="/forgetpassword" target="_blank">
                Quên mật khẩu
            </Link>
          </div>
          <div>
            <Button type="primary" href="/depots" className="w-full">Đăng nhập</Button>
          </div>
      </div>     
    </div>
  );
}

export default Login;
