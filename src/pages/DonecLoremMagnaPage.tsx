import {
  Button,
  Checkbox,
  DatePicker,
  Field,
  Header,
  Hr,
  Input,
  Label,
  Link,
  Select,
  TextArea,
} from "../components";

function DonecLoremMagna() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Header>Donec Lorem Magna</Header>
        <Link href="#" title="Text Link">
          Text Link
        </Link>
      </div>

      <div className="ml-7">
        <Select name="nunlu" className="mr-5" label="Label" disabled>
          <Select.Option selected={true} value={1}>
            NUN LUCTUS VEL TORTOR QUIS SODALES
          </Select.Option>
        </Select>

        <Button disabled>Submit</Button>
      </div>

      <Hr />

      <div className="flex flex-row">
        <div className="basis-1/2">
          <h2 className="text-xs font-bold mb-3">ABOUT</h2>

          <div className="mx-auto md:w-[570px]">
            <div className="flex">
              <Field className="basis-1/2">
                <Label htmlFor="uniqueId">Unique</Label>
                <Input name="uniqueId" value="34-56789012-3" disabled />
              </Field>
              <Field className="basis-1/2">
                <Label htmlFor="altId">ALT ID</Label>
                <Input name="altId" value="" disabled />
              </Field>
            </div>

            <Field>
              <Label htmlFor="dln">DLN</Label>
              <Input name="dln" value="777-67-7777" />
            </Field>

            <Field>
              <Label htmlFor="lastName">Last Name</Label>
              <Input className="w-1/2" name="lastName" value="Wayne" disabled />
            </Field>

            <Field>
              <Label htmlFor="givenName">Given Name</Label>
              <Input
                className="w-1/2"
                name="givenName"
                value="Bruce"
                disabled
              />
            </Field>

            <Field>
              <Label htmlFor="gender">Gender</Label>
              <Select label="Gender" name="gender">
                <Select.Option value="male" selected>
                  M - Male
                </Select.Option>
                <Select.Option value="female">F - Female</Select.Option>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="DOB">DOB</Label>
              <DatePicker name="DOB" value="2001-07-31" />
            </Field>
          </div>
        </div>

        <div className="basis-1/2">
          <h2 className="text-xs font-bold mb-3">ADDRESS</h2>
          <Field>
            <Label htmlFor="street">Street</Label>
            <Input className="w-1/2" name="street" value="" />
          </Field>
          <Field>
            <Label htmlFor="city">City</Label>
            <Input className="w-1/2" name="city" value="" />
          </Field>
          <div>
            <Field className="inline-block">
              <Label htmlFor="state">State</Label>
              <Select label="State" name="state">
                <Select.Option value="ca" selected>
                  CA - California
                </Select.Option>
              </Select>
            </Field>

            <Field className="inline-block">
              <Label className="w-[40px]" htmlFor="zip">
                Zip
              </Label>
              <Input name="zip" value="90210" />
            </Field>
          </div>
          <Field>
            <Label htmlFor="country">Country</Label>
            <Select className="w-1/2" label="country" name="country">
              <Select.Option value="us" selected>
                United States
              </Select.Option>
            </Select>
          </Field>
          <br /> <br /> <br />
          <h2 className="text-xs font-bold mb-3">CONTACT</h2>
          <Field>
            <Label htmlFor="telephone">Telephone</Label>
            <Input className="w-1/4" name="telephone" value="" />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input className="w-1/2" name="Email" value="" />
          </Field>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-bold mb-3 border-3 border-b border-[#e1e1e1]">
          LETTER
        </h2>

        <div className="flex mb-7">
          <div className="basis-1/2">
            <Field>
              <Checkbox
                className="mb-10"
                label="Send a letter"
                name="sendLetter"
                checked
              />
            </Field>
            <Field>
              <Label htmlFor="comments">Comments</Label>
              <TextArea name="comments" value="" />
            </Field>
          </div>

          <div className="basis-1/2">
            <Field>
              <Label htmlFor="letterDate">Date</Label>
              <DatePicker name="letterDate" value="" />
            </Field>
          </div>
        </div>

        <div className="mt-8 ml-20">
          <Button>Submit</Button>
          <Link className="ml-8" href="#" title="Reset Changes">
            Reset Changes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonecLoremMagna;
