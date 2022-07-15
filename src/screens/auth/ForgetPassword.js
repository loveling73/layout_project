import React from "react";
import { Button,Input,Image,Typography,Space } from "antd";
import { MailOutlined,KeyOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

const { Link } = Typography;

function ForgetPassword() {
  return (
    <div className="flex justify-center items-center flex-col" style={{height: '100vh'}}>
      <div className="box-border h-85 w-96 p-3 border-4">
        <div className="text-center flex justify-center items-center"size={12}>
          <Image    
          width={50}
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/83211306_2712030362259164_3197319353317982208_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UbL3EZiaISQAX_n3Tjw&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-tmQtkg6IAjhAoK7RYvxPuw7kyGBtprPBMiSPfNXJZHg&oe=62E93EFA" />
          <span className="text-2xl font-bold "> Ngọc Thắng </span>        
        </div>
        <div className="text-center">
          <h1 className="text-lg font-bold mt-7"> Quên mật khẩu</h1>
          <h2 className="text-sm mt-7"> Vui lòng nhập email đã đăng ký để khôi phục lại mật khẩu của bạn</h2>
        </div>
          <h2 className="mt-5"> E-mail</h2>
          <Input className="" size="large" placeholder="E-mail" prefix={<MailOutlined/>} />   
          <div className="mt-5">
            <Button type="primary" href="/resetpassword"className="w-full">Gửi E-mail</Button>
          </div>         
          <div className="text-center my-3">         
            <Link href="/" target="_blank">
                Quay lại đăng nhập
            </Link>
          </div>
      </div>     
    </div>
  );
}

export default ForgetPassword;
