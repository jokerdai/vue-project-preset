<template>
  <Row style="padding-top: 25px; background: #fff;">
    <Col span="12" offset="6">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="名称" prop="name">
          <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="邮件" prop="mail">
          <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="城市" prop="city">
          <Select v-model="formValidate.city" multiple :max-tag-count="2">
            <Option value="1">New York</Option>
            <Option value="2">London</Option>
            <Option value="3">Sydney</Option>
            <Option value="4">Shenzhen</Option>
            <Option value="Beijing">Beijing</Option>
          </Select>
        </FormItem>
        <FormItem label="日期">
          <Row>
            <Col span="11">
              <FormItem prop="date">
                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date">
                </DatePicker>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center;">-</Col>
            <Col span="11">
              <FormItem prop="time">
                <TimePicker type="time" placeholder="Select time" v-model="formValidate.time">
                </TimePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="性别" prop="gender">
          <RadioGroup v-model="formValidate.gender">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
          <CheckboxGroup v-model="formValidate.interest">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
          <Input v-model="formValidate.desc" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }">
          </Input>
        </FormItem>
        <FormItem label="File" prop="file">
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0;">
              <Icon type="ios-cloud-upload" size="52" style="color: #39f;"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px;">Reset</Button>
        </FormItem>
      </Form>
    </Col>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        city: ['1', '2', '3'],
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        mail: [
          {
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur'
          },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        gender: [{ required: true, message: 'Please select gender', trigger: 'change' }],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: 'Choose at least one hobby',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: 'Choose two hobbies at best',
            trigger: 'change'
          }
        ],
        date: [
          {
            required: true,
            type: 'date',
            message: 'Please select the date',
            trigger: 'change'
          }
        ],
        time: [
          {
            required: true,
            type: 'string',
            message: 'Please select time',
            trigger: 'change'
          }
        ],
        desc: [
          {
            required: true,
            message: 'Please enter a personal introduction',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 20,
            message: 'Introduce no less than 20 words',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
