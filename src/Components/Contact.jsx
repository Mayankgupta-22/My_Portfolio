export default function Contact() {
    return (
        <section className="py-5 px-4">
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <div className="flex flex-col gap-4 max-w-[480px]">
                <label>
                    <p className="pb-2 text-base font-medium">Email</p>
                    <input
                        className="bg-[#2e2b36] text-white w-full rounded-xl p-4 placeholder:text-[#a6a1b5]"
                        placeholder="Your Email"
                    />
                </label>
                <label>
                    <p className="pb-2 text-base font-medium">Message</p>
                    <textarea
                        className="bg-[#2e2b36] text-white w-full rounded-xl p-4 min-h-[150px] placeholder:text-[#a6a1b5]"
                        placeholder="Your Message"
                    />
                </label>
                <div className="flex justify-end">
                    <button className="bg-[#dad2f3] text-[#131217] font-bold px-4 py-2 rounded-xl">
                        Send
                    </button>
                </div>
            </div>
        </section>
    );
}
