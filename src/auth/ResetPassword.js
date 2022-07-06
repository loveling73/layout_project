import React from "react";
import { Button,Input,Image,Typography,Space } from "antd";
import { MailOutlined} from '@ant-design/icons';

const { Link } = Typography;

function ResetPassword() {
  return (
    <div className="flex justify-center items-center flex-col" style={{height: '100vh'}}>
      <div className="box-border h-85 w-96 p-3 border-4">
        <div className="text-center flex justify-center items-center"size={12}>
          <Image 
          className=""   
          width={50}
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/83211306_2712030362259164_3197319353317982208_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UbL3EZiaISQAX_n3Tjw&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-tmQtkg6IAjhAoK7RYvxPuw7kyGBtprPBMiSPfNXJZHg&oe=62E93EFA" />
          <span className="text-2xl font-bold "> Ngọc Thắng </span>        
        </div>
        <div className="text-center flex justify-center items-center mt-7"size={12}>
          <Image    
          width={100}
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/83211306_2712030362259164_3197319353317982208_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UbL3EZiaISQAX_n3Tjw&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-tmQtkg6IAjhAoK7RYvxPuw7kyGBtprPBMiSPfNXJZHg&oe=62E93EFA" />      
        </div>
        <div className="text-center">
          <h1 className="text-lg font-bold mt-7"> Đặt lại mật khẩu</h1>
          <h2 className="text-sm mt-7"> Mã xác minh đã đưcọ gửi đến địa chỉ email</h2>
          <h2 className="text-sm text-sky-400/100"> dichmeluada0310@gmail.com</h2>
          <h2 className="text-sm "> Vui lòng xác minh</h2>
        </div>   
          <div className="my-5 text-center">
            <Button href="/" type="primary" className="w-75"> Quay lại đăng nhập</Button>
          </div>         
      </div>     
    </div>
  );
}

export default ResetPassword;
