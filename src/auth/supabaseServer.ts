import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => 
{
    var supabase: any = createPagesServerClient(context);
    
    const { data: { session } } = await supabase.auth.getSession();

    if(!session) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false
            },
        };
    }

    return {
        props: {
            user: session.user
        }
    };
};

export async function getUserSession(context: any)
{
    const supabase = createPagesServerClient(context);
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user || null; 
}
