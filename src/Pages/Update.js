import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const reactimages = "https://tqfruvglcoupvuwfhpzo.supabase.co/storage/v1/object/public/images"

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imageUpdate, setImageUpdate] = useState(true);
  const [formError, setFormError] = useState(null);

  const uploadImage = async (e) => {
    const date = Date.now();
    const avatarFile = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`public/${date}.jpg`, avatarFile, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log("success", data);
    console.log("error", error);

    if (data) {
      setFileUrl(data.path);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("contacts")
      .update({ name, email, number, fileUrl })
      .eq("id", id);
    if (error) {
      setFormError("Please fill in all the fields.");
      console.log(data)
    }
    navigate("/");
  };

  useEffect(() => {
    const fetchContact = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setName(data.name);
        setEmail(data.email);
        setNumber(data.number);
        setFileUrl(data.fileUrl);
      }
    };
    fetchContact();
  }, [id, navigate]);

  return (
    <>
      <section className="relative">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Update Contact</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {/* Update form to prepopulate the fields of the form with the existing data */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="number" className="leading-7 text-sm text-gray-600">Phone number</label>
                    <input
                      type="number"
                      id="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)} />
                  </div>
                </div>

                {imageUpdate === true ?

                  <div>
                    <img src={`${reactimages}/${fileUrl}`} alt="" className="w-24 h-24" />
                    <button onClick={() => { setImageUpdate(false) }}>Change Image</button>
                  </div>
                  :

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="file" className="leading-7 text-sm text-gray-600">Image</label>
                      <input
                        type="file"
                        id="fileUrl"
                        onChange={uploadImage}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                }

                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded-lg text-lg">Update contact</button>
                </div>
              </div>

              {formError && <p className="error">{formError}</p>}
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default Update;