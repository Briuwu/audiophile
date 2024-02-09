export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      billing_info: {
        Row: {
          address: string
          city: string
          country: string
          created_at: string
          email: string
          id: string
          name: string
          phone: string
          zip_code: string
        }
        Insert: {
          address: string
          city: string
          country: string
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
          zip_code: string
        }
        Update: {
          address?: string
          city?: string
          country?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          zip_code?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          billing_id: string | null
          created_at: string
          id: string
          products: Json
        }
        Insert: {
          billing_id?: string | null
          created_at?: string
          id?: string
          products: Json
        }
        Update: {
          billing_id?: string | null
          created_at?: string
          id?: string
          products?: Json
        }
        Relationships: [
          {
            foreignKeyName: "orders_billing_id_fkey"
            columns: ["billing_id"]
            isOneToOne: false
            referencedRelation: "billing_info"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          category: Database["public"]["Enums"]["categories_types"]
          created_at: string
          description: string
          features: string
          id: string
          includes: Json
          name: string
          new: boolean
          price: number
          slug: string
        }
        Insert: {
          category: Database["public"]["Enums"]["categories_types"]
          created_at?: string
          description: string
          features: string
          id?: string
          includes: Json
          name: string
          new?: boolean
          price: number
          slug: string
        }
        Update: {
          category?: Database["public"]["Enums"]["categories_types"]
          created_at?: string
          description?: string
          features?: string
          id?: string
          includes?: Json
          name?: string
          new?: boolean
          price?: number
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      categories_types: "earphones" | "headphones" | "speakers"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
