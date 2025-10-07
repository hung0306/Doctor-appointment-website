import { Button, Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function DoctorSearch({ items = [] }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const params = new URLSearchParams();
    if (values.keyword) params.append("keyword", values.keyword);
    if (values.location) params.append("location", values.location);

    // ✅ chỉ navigate, không fetch ở đây
    navigate(`/find-doctor?${params.toString()}`);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className="hero__form"
      onFinish={onFinish}
    >
      <Form.Item name="keyword">
        <Input
          allowClear
          placeholder="Tên, địa điểm"
          className="hero__input"
          prefix={<SearchOutlined className="hero__search-icon" />}
        />
      </Form.Item>

      <Form.Item name="location">
        <Select
          className="hero__select"
          options={items}
          placeholder={
            <>
              <IoLocationOutline /> Khoa / Chuyên khoa
            </>
          }
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary" className="hero__btn">
          <SearchOutlined /> Tìm kiếm
        </Button>
      </Form.Item>
    </Form>
  );
}

export default DoctorSearch;
